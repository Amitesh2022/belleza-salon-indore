"use client";

import { useMemo, useState } from "react";
import {
  formatPrice,
  priceCategories,
  searchServices,
  type PriceCategory,
} from "@/lib/prices";
import { whatsappBookHref } from "@/lib/contact";

function SimpleGroupTable({
  group,
}: {
  group: Extract<PriceCategory["groups"][number], { kind: "simple" }>;
}) {
  return (
    <div className="price-group">
      <h3>{group.title}</h3>
      <ul className="price-table" role="table">
        <li className="price-table-head" role="row">
          <span role="columnheader">Service</span>
          <span role="columnheader">Price</span>
          <span role="columnheader" aria-hidden="true" />
        </li>
        {group.items.map((item) => (
          <li key={item.name} className="price-row" role="row">
            <span className="price-row-name" role="cell">
              {item.name}
              {item.note ? <em>{item.note}</em> : null}
            </span>
            <span className="price-row-value" role="cell">
              {formatPrice(item.price)}
            </span>
            <span className="price-row-action" role="cell">
              <a href={whatsappBookHref(item.name)}>
                Book <span aria-hidden="true">↗</span>
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareGroupTable({
  group,
}: {
  group: Extract<PriceCategory["groups"][number], { kind: "compare" }>;
}) {
  return (
    <div className="price-group">
      <h3>{group.title}</h3>
      <ul className="price-table price-table-compare" role="table">
        <li className="price-table-head" role="row">
          <span role="columnheader">Area</span>
          {group.columns.map((col) => (
            <span role="columnheader" key={col}>
              {col}
            </span>
          ))}
          <span role="columnheader" aria-hidden="true" />
        </li>
        {group.rows.map((row) => (
          <li key={row.name} className="price-row" role="row">
            <span className="price-row-name" role="cell">
              {row.name}
            </span>
            {row.prices.map((price, i) => (
              <span className="price-row-value" role="cell" key={`${row.name}-${group.columns[i]}`}>
                {formatPrice(price)}
              </span>
            ))}
            <span className="price-row-action" role="cell">
              <a href={whatsappBookHref(row.name)}>
                Book <span aria-hidden="true">↗</span>
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PriceListExplorer() {
  const [activeId, setActiveId] = useState(priceCategories[0].id);
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchServices(query, 20), [query]);
  const active = priceCategories.find((c) => c.id === activeId) ?? priceCategories[0];

  return (
    <div className="price-explorer">
      <div className="price-search">
        <label htmlFor="price-search-input" className="sr-only">
          Search services
        </label>
        <input
          id="price-search-input"
          type="search"
          placeholder="Search a service, e.g. “facial” or “pedicure”…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query.trim() ? (
        <div className="price-search-results">
          {results.length === 0 ? (
            <p className="price-empty">
              No match for “{query}”.{" "}
              <a href={whatsappBookHref(query)}>Ask us on WhatsApp</a> — we likely
              still offer it.
            </p>
          ) : (
            <ul className="price-table" role="table">
              <li className="price-table-head" role="row">
                <span role="columnheader">Service</span>
                <span role="columnheader">Price</span>
                <span role="columnheader" aria-hidden="true" />
              </li>
              {results.map((r) => (
                <li key={`${r.category}-${r.name}`} className="price-row" role="row">
                  <span className="price-row-name" role="cell">
                    {r.name}
                    <em>{r.category}</em>
                  </span>
                  <span className="price-row-value" role="cell">
                    {formatPrice(r.price)}
                  </span>
                  <span className="price-row-action" role="cell">
                    <a href={whatsappBookHref(r.name)}>
                      Book <span aria-hidden="true">↗</span>
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          <div className="price-tabs" role="tablist" aria-label="Service categories">
            {priceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={category.id === activeId}
                className={
                  category.id === activeId ? "price-tab price-tab-active" : "price-tab"
                }
                onClick={() => setActiveId(category.id)}
              >
                {category.shortLabel}
              </button>
            ))}
          </div>

          <div className="price-category" role="tabpanel">
            <p className="price-category-description">{active.description}</p>
            {active.groups.map((group) =>
              group.kind === "simple" ? (
                <SimpleGroupTable group={group} key={group.title} />
              ) : (
                <CompareGroupTable group={group} key={group.title} />
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
}
