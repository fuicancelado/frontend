import { bolsonaroTwitterResult, LulaTwitterResult } from "./twitterResult"

// all tones
export const searchResult_all = {
    "document_tone": {
        "tones": [
            {
                "score": 0.565706,
                "tone_id": "fear",
                "tone_name": "Fear"
            },
            {
                "score": 0.647322,
                "tone_id": "anger",
                "tone_name": "Anger"
            },
            {
                "score": 0.724923,
                "tone_id": "confident",
                "tone_name": "Confident"
            },
            {
                "score": 0.832932,
                "tone_id": "joy",
                "tone_name": "Joy"
            },
            {
                "score": 0.998976,
                "tone_id": "tentative",
                "tone_name": "Tentative"
            },
            {
                "score": 0.916667,
                "tone_id": "sadness",
                "tone_name": "Sadness"
            },
            {
                "score": 0.872722,
                "tone_id": "analytical",
                "tone_name": "Analytical"
            }
        ]
    }
}

export const searchResult_bolsonaro = {
    "tones": [
        {
            "score": 0.647322,
            "tone_id": "anger",
            "tone_name": "Anger"
        },
        {
            "score": 0.724923,
            "tone_id": "confident",
            "tone_name": "Confident"
        },
        {
            "score": 0.998976,
            "tone_id": "tentative",
            "tone_name": "Tentative"
        },
    ],
    "twitter_comments": bolsonaroTwitterResult
}

export const searchResult_lula = {
    "tones": [
        {
            "score": 0.847322,
            "tone_id": "joy",
            "tone_name": "Joy"
        },
        {
            "score": 0.724923,
            "tone_id": "confident",
            "tone_name": "Confident"
        },
        {
            "score": 0.998976,
            "tone_id": "sadness",
            "tone_name": "Sadness"
        },
        {
            "score": 0.998976,
            "tone_id": "analytical",
            "tone_name": "Analytical"
        },
    ],
    "twitter_comments": LulaTwitterResult
}