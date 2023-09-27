```mermaid
sequenceDiagram
	participant browser
	participant server
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
	activate server
	server-->>browser: HTML-dokumentti
	Note left of server: Palvelin lähettää HTML-sivun
	deactivate server

	browser->>server: GET Ajax
	Note right of browser: Selain pyytää dataa sivun rakentamiseen
	activate server
	server-->>browser: JSON data
	Note left of server: Palvelin lähettää JSON-datan, jonka avulla sivun toiminnot pyörivät selaimessa
	
	deactivate server
```