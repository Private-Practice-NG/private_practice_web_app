## **Styling Rules.**

1. **Each page MUST be styled seperately inside individual scss files.**

2. Each scss file for every individual HTML page, MUST be styled with the name of that HTML page.

   > for example: "landing-page.scss" for the "landing-page.html" page.

3. Each major section in every page MUST be styled inside a seperate scss partial file.

   > scss partials are sub-files that start with an underscore. They are imported into parent scss files in which they are required with the '@use' keyword.

4. The naming convention for every scss partial for all page sections MUST follow this pattern:

   - "\_page-name_file-name.scsc" (please ignore all the extra forward slash - its because this is a markdown file. You can preview it in VS-code or check it out in the github repository to read it more clearly.)

   > for example: "\_landing-page_lead-banner.scss"

5. Every page section hence styled in an scss partial file must be added into the components folder. But the above explained naming convention for such section partial files MUST be followed strictly.

6. The utilities folder will contain all extra utilities like colours, and et cetera.

7. General sections/components partial files like the sidebar partial file should not be named using the above explained naming convention, since such partial files are general files. They should simply be named directly.

   > like: \_sidebar.scss
