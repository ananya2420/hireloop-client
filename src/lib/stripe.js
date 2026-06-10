import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID ={
    'seeker_pro' : 'price_1TgHtwAZuximeGqyEU9gPlak',
    'seeker_premium' : 'price_1TgKNLAZuximeGqyvDkqjIld',
    'recruiter_growth':'price_1TgKOPAZuximeGqyP6Ac9otH',
    'recruiter_enterprise':'price_1TgKPMAZuximeGqywxX5z88z'


}