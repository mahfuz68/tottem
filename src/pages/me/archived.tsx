import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import '../../index.css'
import LoadingPage from '../../scenes/LoadingPage'
import Archived from '../../scenes/Me/Archived'
import { AuthenticatedUser, getUserAuth } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'

const ArchivedPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return loggedInUser ? (
        <Archived loggedInUser={loggedInUser} />
    ) : (
        <LoadingPage />
    )
}

ArchivedPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(ArchivedPage)