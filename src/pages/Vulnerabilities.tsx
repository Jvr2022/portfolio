import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Tape } from '../components/Tape';
import { Card } from '../components/Card';
import { cves, type CveEntry, type CveSeverity } from '../data/cves';
import { meta } from '../config/site';

type SortOption = 'default' | 'severity-desc' | 'severity-asc' | 'project';

const severityOrder: Record<CveSeverity, number> = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

function sortCves(list: CveEntry[], sort: SortOption): CveEntry[] {
  const sorted = [...list];
  switch (sort) {
    case 'severity-desc':
      return sorted.sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity] || (b.score ?? 0) - (a.score ?? 0));
    case 'severity-asc':
      return sorted.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity] || (a.score ?? 0) - (b.score ?? 0));
    case 'project':
      return sorted.sort((a, b) => a.project.localeCompare(b.project));
    default:
      return sorted;
  }
}

export const Vulnerabilities = () => {
  const [query, setQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'ALL' | CveSeverity>('ALL');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCves = cves.filter((entry) => {
    const matchesSeverity = severityFilter === 'ALL' || entry.severity === severityFilter;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${entry.id} ${entry.project} ${entry.description} ${(entry.aliases ?? []).join(' ')}`.toLowerCase().includes(normalizedQuery);

    return matchesSeverity && matchesQuery;
  });

  const sortedCves = sortCves(filteredCves, sortBy);

  const renderSeverity = (entry: CveEntry) => {
    const label = entry.score
      ? `CVSS ${entry.score.toFixed(1)} ${entry.severity}`
      : entry.severity;

    return (
      <span className={`vuln-severity ${entry.severity}`}>
        {label}
      </span>
    );
  };

  return (
    <section className="vuln-page">
      <Helmet>
        <title>{meta.vulnsTitle}</title>
        <meta name="description" content={meta.vulnsDescription} />
      </Helmet>
      <Card tiltAngle={0.15} delay={0.08}>
        <Tape position="corner-tr" />
        <div className="vuln-controls">
          <input
            className="vuln-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by advisory ID, project, or description"
            aria-label="Search advisories"
          />

          <div className="vuln-toolbar">
            <div className="vuln-filter-group" aria-label="Filter by severity">
              {(['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`vuln-filter ${severityFilter === option ? 'is-active' : ''}`}
                  onClick={() => setSeverityFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <select
              className="vuln-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              aria-label="Sort advisories"
            >
              <option value="default">Default order</option>
              <option value="severity-desc">Severity ↓</option>
              <option value="severity-asc">Severity ↑</option>
              <option value="project">Project A–Z</option>
            </select>
          </div>

          <div className="vuln-results">
            Showing {sortedCves.length} of {cves.length} advisories.
          </div>
        </div>
      </Card>

      <div className="vuln-list">
        {sortedCves.length > 0 ? (
          sortedCves.map((entry, index) => (
            <Card
              key={entry.id}
              tiltAngle={index % 2 === 0 ? 0.2 : -0.2}
              delay={0.04 + index * 0.02}
              className="vuln-card"
            >
              <Tape position={index % 2 === 0 ? 'corner-tl' : 'corner-tr'} />
              <div className="vuln-card-header">
                <div className="vuln-card-title">
                  <h3>{entry.id}</h3>
                  <span className="vuln-project">{entry.project}</span>
                  {entry.aliases?.length ? (
                    <span className="vuln-aliases">{entry.aliases.join(' / ')}</span>
                  ) : null}
                </div>
                {renderSeverity(entry)}
              </div>

              <p className="vuln-description">{entry.description}</p>

              <div className="vuln-actions">
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cardboard"
                >
                  {entry.urlLabel}
                </a>
              </div>
            </Card>
          ))
        ) : (
          <Card tiltAngle={0} delay={0.12}>
            <div className="vuln-empty">
              No advisories match the current filters. Try clearing the search or switching severity/project filters.
            </div>
          </Card>
        )}
      </div>

      <Card tiltAngle={-0.15} delay={0.18} className="vuln-easter-egg">
        <Tape position="top-center" />
        <div className="vuln-archive-note">
          <span className="vuln-egg-label">Archive Note</span>
          <p className="vuln-egg-text">
            Dear traveler, if you made it this far into the archive, thanks for reading.
            More findings will find their way onto these shelves soon enough.
          </p>
        </div>
      </Card>
    </section>
  );
};
