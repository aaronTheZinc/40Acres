# Details

Date : 2024-09-29 08:00:38

Directory /Users/aaronmarsh/Documents/hackathon

Total : 66 files,  11806 codes, 135 comments, 262 blanks, all 12203 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.eslintrc.cjs](/.eslintrc.cjs) | JavaScript | 41 | 1 | 0 | 42 |
| [README.md](/README.md) | Markdown | 18 | 0 | 12 | 30 |
| [components.json](/components.json) | JSON | 20 | 0 | 0 | 20 |
| [next.config.js](/next.config.js) | JavaScript | 13 | 5 | 3 | 21 |
| [package-lock.json](/package-lock.json) | JSON | 9,715 | 0 | 1 | 9,716 |
| [package.json](/package.json) | JSON | 69 | 0 | 1 | 70 |
| [postcss.config.cjs](/postcss.config.cjs) | JavaScript | 6 | 0 | 2 | 8 |
| [prettier.config.js](/prettier.config.js) | JavaScript | 4 | 1 | 2 | 7 |
| [prisma/migrations/20240929030729_init/migration.sql](/prisma/migrations/20240929030729_init/migration.sql) | MS SQL | 9 | 3 | 3 | 15 |
| [prisma/migrations/20240929055532_shares_properties/migration.sql](/prisma/migrations/20240929055532_shares_properties/migration.sql) | MS SQL | 16 | 2 | 2 | 20 |
| [prisma/migrations/20240929060324_added_pw/migration.sql](/prisma/migrations/20240929060324_added_pw/migration.sql) | MS SQL | 17 | 1 | 1 | 19 |
| [prisma/migrations/20240929081929_thumbnail_addition/migration.sql](/prisma/migrations/20240929081929_thumbnail_addition/migration.sql) | MS SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240929101232_property/migration.sql](/prisma/migrations/20240929101232_property/migration.sql) | MS SQL | 18 | 9 | 1 | 28 |
| [prisma/schema.prisma](/prisma/schema.prisma) | Prisma | 36 | 6 | 6 | 48 |
| [src/app/api/auth/login/route.ts](/src/app/api/auth/login/route.ts) | TypeScript | 9 | 0 | 2 | 11 |
| [src/app/api/auth/register/route.ts](/src/app/api/auth/register/route.ts) | TypeScript | 20 | 4 | 5 | 29 |
| [src/app/api/property/create/route.ts](/src/app/api/property/create/route.ts) | TypeScript | 11 | 0 | 1 | 12 |
| [src/app/auth/login/page.tsx](/src/app/auth/login/page.tsx) | TypeScript JSX | 11 | 0 | 2 | 13 |
| [src/app/auth/register/page.tsx](/src/app/auth/register/page.tsx) | TypeScript JSX | 8 | 0 | 2 | 10 |
| [src/app/components/nav/nav.tsx](/src/app/components/nav/nav.tsx) | TypeScript JSX | 156 | 1 | 4 | 161 |
| [src/app/components/shared/cards/listing.preview.tsx](/src/app/components/shared/cards/listing.preview.tsx) | TypeScript JSX | 48 | 1 | 2 | 51 |
| [src/app/components/shared/cards/withdraw.tsx](/src/app/components/shared/cards/withdraw.tsx) | TypeScript JSX | 36 | 0 | 7 | 43 |
| [src/app/components/shared/links/explore.tsx](/src/app/components/shared/links/explore.tsx) | TypeScript JSX | 13 | 0 | 2 | 15 |
| [src/app/components/shared/search/searchbar.tsx](/src/app/components/shared/search/searchbar.tsx) | TypeScript JSX | 18 | 0 | 3 | 21 |
| [src/app/components/shared/tags/index.tsx](/src/app/components/shared/tags/index.tsx) | TypeScript JSX | 46 | 0 | 6 | 52 |
| [src/app/components/views/auth/login.tsx](/src/app/components/views/auth/login.tsx) | TypeScript JSX | 71 | 0 | 2 | 73 |
| [src/app/components/views/auth/register.tsx](/src/app/components/views/auth/register.tsx) | TypeScript JSX | 101 | 0 | 2 | 103 |
| [src/app/components/views/listings/demo.tsx](/src/app/components/views/listings/demo.tsx) | TypeScript JSX | 19 | 0 | 2 | 21 |
| [src/app/components/views/listings/explore.tsx](/src/app/components/views/listings/explore.tsx) | TypeScript JSX | 42 | 0 | 4 | 46 |
| [src/app/components/views/listings/index.tsx](/src/app/components/views/listings/index.tsx) | TypeScript JSX | 18 | 2 | 2 | 22 |
| [src/app/components/views/property/create.tsx](/src/app/components/views/property/create.tsx) | TypeScript JSX | 95 | 0 | 5 | 100 |
| [src/app/dashboard/page.tsx](/src/app/dashboard/page.tsx) | TypeScript JSX | 59 | 0 | 3 | 62 |
| [src/app/explore/page.tsx](/src/app/explore/page.tsx) | TypeScript JSX | 8 | 0 | 2 | 10 |
| [src/app/fonts/playfair.ts](/src/app/fonts/playfair.ts) | TypeScript | 10 | 4 | 6 | 20 |
| [src/app/hooks/layout/layout.ts](/src/app/hooks/layout/layout.ts) | TypeScript | 2 | 0 | 0 | 2 |
| [src/app/hooks/price.ts](/src/app/hooks/price.ts) | TypeScript | 1 | 0 | 0 | 1 |
| [src/app/hooks/requests/auth.ts](/src/app/hooks/requests/auth.ts) | TypeScript | 76 | 0 | 18 | 94 |
| [src/app/hooks/requests/properties.ts](/src/app/hooks/requests/properties.ts) | TypeScript | 50 | 0 | 6 | 56 |
| [src/app/layout.tsx](/src/app/layout.tsx) | TypeScript JSX | 37 | 0 | 5 | 42 |
| [src/app/page.tsx](/src/app/page.tsx) | TypeScript JSX | 67 | 29 | 3 | 99 |
| [src/app/property/[id]/page.tsx](/src/app/property/%5Bid%5D/page.tsx) | TypeScript JSX | 8 | 0 | 3 | 11 |
| [src/app/property/create/page.tsx](/src/app/property/create/page.tsx) | TypeScript JSX | 18 | 0 | 3 | 21 |
| [src/app/wrappers/react-cookies.tsx](/src/app/wrappers/react-cookies.tsx) | TypeScript JSX | 9 | 0 | 3 | 12 |
| [src/app/wrappers/react-query.tsx](/src/app/wrappers/react-query.tsx) | TypeScript JSX | 12 | 0 | 2 | 14 |
| [src/components/ui/button.tsx](/src/components/ui/button.tsx) | TypeScript JSX | 51 | 0 | 6 | 57 |
| [src/components/ui/card.tsx](/src/components/ui/card.tsx) | TypeScript JSX | 71 | 0 | 9 | 80 |
| [src/components/ui/input.tsx](/src/components/ui/input.tsx) | TypeScript JSX | 21 | 0 | 5 | 26 |
| [src/components/ui/label.tsx](/src/components/ui/label.tsx) | TypeScript JSX | 21 | 0 | 6 | 27 |
| [src/components/ui/navigation-menu.tsx](/src/components/ui/navigation-menu.tsx) | TypeScript JSX | 117 | 0 | 12 | 129 |
| [src/components/ui/progress.tsx](/src/components/ui/progress.tsx) | TypeScript JSX | 24 | 0 | 5 | 29 |
| [src/components/ui/slider.tsx](/src/components/ui/slider.tsx) | TypeScript JSX | 24 | 0 | 5 | 29 |
| [src/env.js](/src/env.js) | JavaScript | 34 | 25 | 4 | 63 |
| [src/lib/router.ts](/src/lib/router.ts) | TypeScript | 39 | 0 | 9 | 48 |
| [src/lib/utils.ts](/src/lib/utils.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [src/schema/auth/index.tsx](/src/schema/auth/index.tsx) | TypeScript JSX | 14 | 0 | 5 | 19 |
| [src/schema/property/index.ts](/src/schema/property/index.ts) | TypeScript | 10 | 0 | 3 | 13 |
| [src/server/auth.ts](/src/server/auth.ts) | TypeScript | 36 | 31 | 6 | 73 |
| [src/server/auth/index.ts](/src/server/auth/index.ts) | TypeScript | 25 | 0 | 6 | 31 |
| [src/server/auth/token.ts](/src/server/auth/token.ts) | TypeScript | 24 | 0 | 7 | 31 |
| [src/server/db.ts](/src/server/db.ts) | TypeScript | 12 | 0 | 7 | 19 |
| [src/server/db/property.ts](/src/server/db/property.ts) | TypeScript | 17 | 0 | 2 | 19 |
| [src/server/db/share.ts](/src/server/db/share.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [src/server/db/user.ts](/src/server/db/user.ts) | TypeScript | 17 | 0 | 4 | 21 |
| [src/styles/globals.css](/src/styles/globals.css) | CSS | 80 | 5 | 10 | 95 |
| [tailwind.config.ts](/tailwind.config.ts) | TypeScript | 61 | 0 | 2 | 63 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 35 | 4 | 4 | 43 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)