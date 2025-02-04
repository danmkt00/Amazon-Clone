# Amazon clone

This project is a clone of Amazon.com

---

## Setup

- Create a new repo
- Turn on GitHub pages
- Protect the main branch
- Create issues
- Clone the repo to a local machine
- Create branches for each issue

---

### Navigation belt

> - As a user I want to see the logo and my address of delivering so i need a
>   left navbar
> - As a user I want to search through the website so i need a search navbar
> - As a user I want to select a website language, see my Account list, my
>   orders and my basket so i need a tools navbar

This feature on a branch `navigation-belt`.

#### HTML

> Left navbar

- Add `header` with `navbar-main` id
- Add `div` with class `nav-belt` inside `navbar-main`
- Add `div` with class `nav-left` inside `nav-belt`
- Add `div` with class `nav-logo` inside `nav-left`
- Add `div` with class `nav-global-location-slot` inside `nav-left`

> Search navbar

- Add `div` with class `nav-fill` inside `nav-belt`
- Add `div` with class `nav-search` inside `nav-fill`

> Tools navbar

- Add `div` with class `nav-right` inside `nav-belt`
- Add `div` with class `nav-tools` inside `nav-right`
- Add four `a` inside `nav-tools`

#### CSS

- Add style to navigation belt

---

### Main navigation

> - As a user I want to have access to main navigation so i need a main navbar

This feature on a branch `main-navigation`.

#### HTML

- Add `div` with class `nav-main` inside `navbar-main`
- Add `div` with class `nav-left` inside `nav-main`
- Add `div` with class `nav-fill` inside `nav-main`
- Add `div` with class `nav-right` inside `nav-main`

#### CSS

- Add style to main navigation

---

### Main section

> - As a user I want to see cards with products so i need a main section

This feature on a branch `main-section`.

#### HTML

- Add `div` with class `page-content`
- Add `div` with class `desktop-banner` inside `page-content`
- Add `div` with class `gw-layout`
- Add `div` with class `gw-card-layout` inside `gw-layout`

#### CSS

- Add style to main section

---

### Footer

> - As a user I want to see all the info about the website, select website's
>   language and country, so i need a footer

This feature on a branch `footer`.

#### HTML

- Add `div` with class `navLeftFooter` and `navFooter` id
- Add `a` with `navBackToTop` id inside `navLeftFooter`
- Add `div` with class `navFooterVerticalColumn` inside `navLeftFooter`
- Add `div` with class `navFooterVerticalRow` inside `navFooterVerticalColumn`
- Add `div` with class `navFooterPadItemLine`inside `navLeftFooter`
- Add `div` with class `navFooterDescLine`inside `navLeftFooter`
- Add `div` with class `navFooterCopyright`inside `navLeftFooter`

#### CSS

- Add style to footer
