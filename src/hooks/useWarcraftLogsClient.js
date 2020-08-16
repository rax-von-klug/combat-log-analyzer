import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import useAxios from 'axios-hooks'

export const useWarcraftLogsClient = () => {
  const [{ data }] = useAxios({
    url: 'http://classic.warcraftlogs.com/oauth/token',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: 'grant_type=client_credentials',
    auth: {
      username: '914752d4-ccf4-4cc7-9ee9-6640951ee18c',
      password: 'FDSm4bqqGlzTEpLTjY1XpUaLq0NLJy6u2kGOfm6F',
    },
  })

  const link = createHttpLink({
    uri: 'https://classic.warcraftlogs.com/api/v2/client',
  })
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${data.access_token}`,
    },
  }))

  return new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
  })
}
