```mermaid
sequenceDiagram
	participant browser
	participant server

	browser->>server: HTTP POST new_note
	activate server
	server-->>browser: 201 created
	deactivate server
	Note right of browser: Sivu ei lataudu uudelleen, vaan selaimen koodi <br> hakee sivulta lomake-elementin ja rekisteröi <br> sille tapahtumakäsittelijän
	
	browser->>server: HTTP POST new_note_spa
	activate server
	Note right of browser: Uusi muistiinpano luodaan, lisätään <br> muistiinpanojen listalle, jonka jälkeen <br> sivun data lähetetään palvelimelle
	browser->>server: JSON data
	deactivate server
```