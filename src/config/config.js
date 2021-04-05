// Application property
export default {
  SECRET: '7bc78545b1amSNEtVPhx159E1qUxY7enwMgFHjgUb9',
  ACCESS_RULE: {
    "GET": ["user", "moderator", "admin"],
    "POST": ["moderator", "admin"],
    "PUT": ["moderator", "admin"],
    "DELETE": ["admin"]
  }
}