# BACK-END Proyecto_RedSocialM2_LCSC

## Rutas Funcionales

---

# Usuarios

## Registrar Usuario

**POST**

```http
https://backendredsocial.vercel.app/usuarios/register
```

```json
{
  "username": "",
  "email": "",
  "password": ""
}
```

## Iniciar Sesión

**POST**

```http
https://backendredsocial.vercel.app/usuarios/login
```

```json
{
  "email": "",
  "password": ""
}
```

## Editar Usuario

**PUT**

```http
https://backendredsocial.vercel.app/usuarios/edituser/:userId
```

```json
{
  "username": "",
  "email": "",
  "password": ""
}
```

## Eliminar Usuario

**DELETE**

```http
https://backendredsocial.vercel.app/usuarios/deleteuser/:userId
```

## Ver Todos los Usuarios

**GET**

```http
https://backendredsocial.vercel.app/usuarios/seeusers
```

---

# Posts

## Crear Post

**POST**

```http
https://backendredsocial.vercel.app/posts/addpost
```

```json
{
  "userId": "",
  "username": "",
  "body": ""
}
```

## Ver Todos los Posts

**GET**

```http
https://backendredsocial.vercel.app/posts
```

## Ver Todos los Posts de un Usuario

**GET**

```http
https://backendredsocial.vercel.app/posts/user/:userId
```

## Obtener Feed de Usuarios Seguidos

**POST**

```http
https://backendredsocial.vercel.app/posts/feed
```

```json
{
  "userIds": ["", ""]
}
```

## Editar Post

**PUT**

```http
https://backendredsocial.vercel.app/posts/editpost/:postId
```

```json
{
  "body": ""
}
```

## Eliminar Post

**DELETE**

```http
https://backendredsocial.vercel.app/posts/deletepost/:postId
```

---

# Seguidores

## Seguir Usuario

**POST**

```http
https://backendredsocial.vercel.app/seguidores/seguir
```

```json
{
  "userId": "",
  "followId": ""
}
```

## Dejar de Seguir Usuario

**POST**

```http
https://backendredsocial.vercel.app/seguidores/dejar
```

```json
{
  "userId": "",
  "followId": ""
}
```

## Ver Seguidores de un Usuario

**GET**

```http
https://backendredsocial.vercel.app/seguidores/:userId
```

---

# Mensajes

## Enviar Mensaje

**POST**

```http
https://backendredsocial.vercel.app/mensajes
```

```json
{
  "senderId": "",
  "receiverId": "",
  "text": ""
}
```

## Ver Todos los Mensajes de un Usuario

**GET**

```http
https://backendredsocial.vercel.app/mensajes/:userId
```

## Ver Conversación Entre Dos Usuarios

**GET**

```http
https://backendredsocial.vercel.app/mensajes/conversacion/:userId1/:userId2
```
