Add-Type -AssemblyName System.Drawing

$files = @(
  'src/assets/teamfotos/Teamfoto.jpg',
  'src/assets/teamfotos/Teamfoto2.jpg',
  'src/assets/transfers/Transfer Devin.jpg',
  'src/assets/trips/eindhoven/Eindhoven_eten_stefan.jpg',
  'src/assets/trips/eindhoven/Eindhoven_foto_groep.jpg',
  'src/assets/trips/eindhoven/Eindhoven_foto_Milan_Robbe_Arjen.jpg',
  'src/assets/trips/eindhoven/Eindhoven_foto_pedro.jpg',
  'src/assets/trips/eindhoven/Eindhoven_foto_stefan_groep.jpg',
  'src/assets/trips/eindhoven/Eindhoven_foto_toren.jpg'
)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

$encoder = [System.Drawing.Imaging.Encoder]::Quality
$maxSide = 1600
$quality = 72L

foreach ($path in $files) {
  $image = [System.Drawing.Image]::FromFile($path)

  $scale = [Math]::Min(1.0, $maxSide / [Math]::Max($image.Width, $image.Height))
  $targetWidth = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
  $targetHeight = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))

  $bitmap = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)

  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter $encoder, $quality

  $directory = Split-Path $path -Parent
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($path)
  $outputPath = Join-Path $directory "$baseName.optimized.jpg"

  $bitmap.Save($outputPath, $codec, $encoderParams)

  $graphics.Dispose()
  $bitmap.Dispose()
  $image.Dispose()

  $original = Get-Item $path
  $optimized = Get-Item $outputPath
  Write-Output "$($original.FullName.Replace('\', '/')) -> $($optimized.FullName.Replace('\', '/')) ($($original.Length) -> $($optimized.Length) bytes, ${targetWidth}x${targetHeight})"
}
