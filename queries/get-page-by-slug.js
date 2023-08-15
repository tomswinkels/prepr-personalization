// ./queries/getPageBySlug.js

export const GetPageBySlug = gql`

    # Add variable for the segment
    query ($slug: String, $segment: String!) {
        Page(slug: $slug) {
            _id
            title
            _slug

            # Retrieve a variant based on the provided segment
            stack (personalize_for_segments: [$segment]) {
                __typename
                ... on PageHeader  {
                    heading
                    cta_url
                    cta_label
                    image {
                        url(width: 1600)
                    }
                    _id
                    text

                    # Retrieve system fields with personalization info
                    # The _context fields hold info about the personalization:
                    #  - "kind" shows that this component includes personalization
                    #  - "group_id" is a unique Id to identify a specific personalized grouping for multiple personalized components
                    #  - "segments" is the segment that the variant is applicable to.
                    #  - "countries" is filled if the variant is applicable to specific countries.
                    _context {
                        kind
                        group_id
                        segments
                        countries
                    }
                }
                ... on ImageAndText {
                    image {
                        url(width: 800)
                    }
                    text
                    title
                    image_position
                    _id
                }
            }
        }
    }
`;
