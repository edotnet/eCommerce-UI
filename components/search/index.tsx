import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  connectStateResults,
} from "react-instantsearch-dom";

import React from "react";
import algoliasearch from "algoliasearch/lite";
import Image from "next/image";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

type HitsProps = {
  hit: Hit;
};

type Hit = {
  id: string;
  title: string;
  thumbnail: string;
};

const Search = () => {
  const Results = connectStateResults(
    ({ searchState, searchResults, children }: any) =>
      searchState &&
      searchState.query &&
      searchResults &&
      searchResults.nbHits !== 0 ? (
        <div className="p-2 bg-gray-200 shadow-md">{children}</div>
      ) : (
        <div></div>
      )
  );

  return (
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME!}
      searchClient={searchClient}
    >
      <SearchBox />
      <Results>
        <Hits hitComponent={Hit} />
      </Results>
    </InstantSearch>
  );
};

const Hit = ({ hit }: HitsProps) => {
  return (
    <div className="flex pb-2 gap-4 items-center">
      <Image alt={hit.title} src={hit.thumbnail} width={70} height={70} />
      <Highlight attribute="title" hit={hit} tagName="mark" />
    </div>
  );
};

export default Search;
