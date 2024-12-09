import qs from "qs";

export const getCategoriesQuery = (): string =>
  qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.categories-section": {
            populate: {
              categories: {
                populate: {
                  categories: {
                    fields: ["title"],
                    populate: {
                      books: {
                        fields: ["title", "author"],
                        populate: {
                          image: {
                            fields: ["url", "alternativeText"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
