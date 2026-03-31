<template>
  <div class="page">
    <section class="inner-hero">
      <div class="container inner-hero__grid">
        <div>
          <p class="section-kicker">Wedstrijden</p>
          <h1 class="inner-title">Resultaten en klassement.</h1>
          <p class="inner-copy">
            Wat er gespeeld is, wat er nog komt, en waar ODT op dit moment staat.
          </p>
        </div>

        <aside class="inner-sidebox">
          <p class="section-kicker">Kort</p>
          <strong>{{ currentTeamName }}</strong>
          <span>
            {{ currentTeamStanding?.points ?? 0 }} punten na
            {{ currentTeamStanding?.played ?? 0 }} matchen
          </span>
        </aside>
      </div>
    </section>

    <section class="section-block">
      <div class="container competition-layout">
        <div class="panel panel--soft competition-panel competition-panel--results">
          <h3 class="block-title">Laatste uitslagen</h3>
          <div class="match-listing">
            <article v-for="match in results" :key="match.id" class="match-line">
              <span class="match-line__date">{{ formatDate(match.date) }}</span>
              <span class="match-line__team match-line__team--home match-line__team--primary">
                {{ match.home ? teamName : match.opponent }}
              </span>
              <span class="match-line__score">{{ match.scored }} - {{ match.conceded }}</span>
              <span class="match-line__team match-line__team--secondary">
                {{ match.home ? match.opponent : teamName }}
              </span>
              <span class="match-line__tag">
                {{ match.home ? 'Thuis' : 'Uit' }}
              </span>
            </article>
          </div>
        </div>

        <div class="panel panel--red competition-panel competition-panel--standings">
          <h3 class="block-title">Klassement</h3>
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
                  v-for="row in standings"
                  :key="row.team"
                  :class="{ 'is-team-row': row.team === currentTeamName }"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { results, standings, teamName } from '@/data/clubData';

const normalizeTeamName = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const teamAliases = ['onder de toren veulen', 'zvk odt', teamName];

const currentTeamStanding =
  standings.find((row) =>
    teamAliases.some((alias) => normalizeTeamName(row.team) === normalizeTeamName(alias)),
  ) ?? standings[0];

const currentTeamName = currentTeamStanding.team;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(date));
</script>
