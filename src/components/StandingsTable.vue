<template>
  <div class="table-wrap">
    <table class="standings-table">
      <thead>
        <tr>
          <th class="standings-table__rank">#</th>
          <th>Ploeg</th>
          <th>GP</th>
          <th>W</th>
          <th>G</th>
          <th>V</th>
          <th class="standings-table__extra">DV</th>
          <th class="standings-table__extra">DT</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.team"
          :class="{ 'is-team-row': row.team === highlightedTeam }"
        >
          <td data-label="#" class="standings-table__rank">{{ row.position }}</td>
          <td data-label="Ploeg">{{ row.team }}</td>
          <td data-label="GP">{{ row.played }}</td>
          <td data-label="W">{{ row.won }}</td>
          <td data-label="G">{{ row.drawn }}</td>
          <td data-label="V">{{ row.lost }}</td>
          <td data-label="DV" class="standings-table__extra">{{ row.goalsFor }}</td>
          <td data-label="DT" class="standings-table__extra">{{ row.goalsAgainst }}</td>
          <td data-label="Pts">{{ row.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { StandingRow } from '@/types';

defineProps<{
  rows: StandingRow[];
  highlightedTeam?: string;
}>();
</script>
