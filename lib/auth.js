import jwt from 'jsonwebtoken'
import Cookie from 'js-cookie'

export const setToken = (token) => {
    if (!process.browser) { return }
    Cookie.set('jwt', token)
}

export const unsetToken = () => {
    if (!process.browser) { return }
    Cookie.remove('jwt')
}

export const getUserFromCookie = (req) => {
    if (!req.headers.cookie) { return undefined }
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
    if (!jwtCookie) { return undefined }
}

/* What am I even doing here? */