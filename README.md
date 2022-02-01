## Get Start

###### start backend

`$ cd backend`

`$ npm run dev`

###### start frontend

`$ npm start`

db設定
`mysql  Ver 8.0.26`

`MYSQL_DATABASE = react-app`

`MYSQL_USER = root`

`MYSQL_PASSWORD = password`

```
CREATE TABLE todo (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, uuid VARCHAR(255) NOT NULL, todovalue TEXT NOT NULL, status BOOLEAN NOT NULL DEFAULT 0);
```
