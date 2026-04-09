import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Tape } from '../components/Tape';
import { Card } from '../components/Card';
import { cves, type CveEntry, type CveSeverity } from '../data/cves';
import './Vulnerabilities.css';

export const Vulnerabilities = () => {
  const [query, setQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<'ALL' | CveSeverity>('ALL');

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCves = cves.filter((entry) => {
    const matchesSeverity = severityFilter === 'ALL' || entry.severity === severityFilter;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${entry.id} ${entry.project} ${entry.description} ${(entry.aliases ?? []).join(' ')}`.toLowerCase().includes(normalizedQuery);

    return matchesSeverity && matchesQuery;
  });

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
        <title>Security Advisories - Joshua van Rijswijk</title>
        <meta name="description" content="A comprehensive chronological list of high-impact security vulnerabilities and CVEs identified by Joshua van Rijswijk." />
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
          </div>

          <div className="vuln-results">
            Showing {filteredCves.length} of {cves.length} advisories.
          </div>
        </div>
      </Card>

      <div className="vuln-list">
        {filteredCves.length > 0 ? (
          filteredCves.map((entry, index) => (
            <Card
              key={entry.id}
              tiltAngle={index % 2 === 0 ? 0.2 : -0.2}
              delay={0.12 + index * 0.04}
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
