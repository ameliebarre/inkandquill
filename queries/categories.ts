import qs from "qs";

export const getCategoriesQuery = (): string =>
  qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.categories-section": {
            populate: {
              bookcategory: {
                populate: {
                  category: {
                    fields: ["title", "slug"],
                    populate: {
                      books: {
                        fields: ["title", "author", "isNewRelease"],
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
