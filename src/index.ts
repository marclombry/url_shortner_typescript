import express from 'express';
import { nanoid } from 'nanoid';
import { URL } from 'url';

const app = express();
const PORT = 3000;

app.use(express.json());

const urlDatabase: Record<string, string> = {};

const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

app.post('/shorten', (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).json({ error: 'longUrl is required' });
    }

    if (!isValidUrl(longUrl)) {
        return res.status(400).json({ error: 'longUrl is invalid' });
    }

    let shortId = nanoid(8);

    while (urlDatabase[shortId]) {
        shortId = nanoid(8);
    }

    urlDatabase[shortId] = longUrl;

    const shortUrl = `${req.protocol}://${req.get('host')}/${shortId}`;
    res.json({ shortUrl });
});

app.get('/:shortId', (req, res) => {
    const { shortId } = req.params;

    const longUrl = urlDatabase[shortId];
    if (longUrl) {
        return res.redirect(longUrl);
    } else {
        return res.status(404).json({ error: 'URL not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server executed : http://localhost:${PORT}`);
});
