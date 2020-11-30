# bcWidget

This app will make an API call to gather all your products and will gather IDs. Then it will make another API with the item IDs and will gather image URLs. It will then create a widget template by the name provided in the .env file. If it sees that a widget template exists, it will find the UUID of that template and pass it through to the widget creation or the newly created widget template's UUID. It will then create this new widget with the found image URLs.

The process will create a new widget that is available in the Page Builder to click and drop into your site.

## Installation

1. Clone/fork your repo into your local machine.
2. Once its downloaded run

```bash
npm install
```

3. Once the dependencies are installed, open the .env file in the main directory.

```text
ACCESS_TOKEN=
API_PATH=
TEMPLATE_NAME= [INSERT YOUR WIDGET NAME HERE]
WIDGET_NAME= [INSERT YOUR WIDGET NAME HERE]
```

4. Fill in with your ACCESS_TOKEN, API_PATH and the name of the widget template and widget you would like to create.
5. Run

```bash
node main.js
```
