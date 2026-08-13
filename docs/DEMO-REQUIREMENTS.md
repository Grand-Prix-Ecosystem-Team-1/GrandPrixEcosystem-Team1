# Demo Sprint Requirements #
### 1 - Team Page contents ### 
- 1.1 - While displayed, the team page will feature one ‘team member card’ for each team member, along with all common navigation elements already present within the website 

    - 1.1.1 - The address for the team page will be localhost:3000/team 

- 1.2 - While displayed, each ‘team member card’ will feature one of each: name, photo, role, blurb 

    - 1.2.1 - Photos must be in one of the following formats: JPG, PNG, GIF, HEIF, HEIC, TIFF; and must be smaller than 5mb 

    - 1.2.2 - Name, role, and blurb must be plain text and feature no markdown, html, emojis or embedded links 

    - 1.2.3 - Each of name, role, and blurb must be no more than 500 characters long 
### 2 - Login ### 
- 2.1 - When the user logs in with a valid username and password, they are redirected to the team page instead of the dashboard 

- 2.2 - When a user fails to login with a valid username and password, they are not redirected to the team page but stay on the login page, as per current behaviour  

 - 2.3 - When a user with an active/valid session accesses the website’s root address (i.e. localhost:3000/) they are directed to the team page
### 3 - Edge Cases ###
 - 3.1 - When a user who is not logged in nor possess valid authentication attempts to access the team page via URL (i.e. localhost:3000/team), they are redirected to the login page 

 - 3.2 - When the name, role or blurb text for a team member card is unavailable, the card will display a warning in the place of the missing text 

    - 3.2.1 - The displayed warning text will inform users that there is missing information 

- 3.3 - When the photo for a team member card is unavailable, the card will display a placeholder image 

- 3.4 - If all of name, role, blurb and photo are unavailable, the card will not render onto the screen 

    - 3.4.1 - Missing team member cards will not be rendered in such a way that it’s absence does not affect other screen elements. E.g. there will not be a gap in team member cards  

- 3.5 - If no team member cards are rendered, then the team member page will display an error message  
### 4  - Scope ### 
- 4.1 - This added page and login page styling must not affect authentication logic and session behaviour 

- 4.2 - Except for requirements related to redirection to and from the team page (i.e. 2.1, 2.2, 2.3, 3.1), changes will be for styling only   

- 4.3 - Tests must be written for requirements 2.1 and 3.1 to 3.5 (excluding 3.4.1) 

    - 4.3.1 - If Time permits, tests should be written for requirements 2.2 and 2.3 