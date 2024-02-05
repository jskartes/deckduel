![logo.png](/public/image-assets/logo.png)

**DeckDuel** is a digital client for a fictitious, ChatGPT-and-DALL·E-authored "trading card game." The decision to embark upon designing this app came from the desire to digitalize a TCG concept that I'd worked on in the past with a friend of mine. Needing to incorporate a game with *much less* complexity of rules for my first foray into designing a digital TCG web client, I turned to the mega-brain of AI to provide me with just such a "game."

**DeckDuel** provides a real-time chat client for its users to communicate both outside of and during gameplay. That same real-time behavior, enabled by **Socket.IO**, will coordinate the gameplay of **DeckDuel** itself, as well.

At present, the "gamelet" offered by **DeckDuel** is meant to be a fun play experience, as simple as it may be, and I may continue to allow the game to exist even when I do move on to incorporate more complex games based on real IP currently in development.

![Screenshot 2024-02-04 at 9.46.57 PM.png](/Users/jsk/Desktop/Screenshot%202024-02-04%20at%209.46.57 PM.png)

![Screenshot 2024-02-04 at 9.47.23 PM.png](/Users/jsk/Desktop/Screenshot%202024-02-04%20at%209.47.23 PM.png)

![Screenshot 2024-02-04 at 9.48.02 PM.png](/Users/jsk/Desktop/Screenshot%202024-02-04%20at%209.48.02 PM.png)

## Technologies Used

**DeckDuel** is built as a SPA with a MERN-stack architecture. **JSON web token**-based authentication security is ensured via **bcrypt**. All styling written in **Sass**. Additional functionality is provided via the **Socket.IO** library (real-time chat and soon-to-be-implemented real-time gameplay) and the **react-beautiful-dnd** library (drag-and-drop functionality for game cards).

As a composer, I also included a couple of my own proprietary musical assets as background music for various aspects of the user's experience while using the app.

## Getting Started

[Trello](https://trello.com/b/p0yKn18v/deckduel) | [LucidChart](https://lucid.app/lucidchart/327f4c65-a1e2-4cdb-936a-a70234cbb566/edit?page=0_0#)

**Deployed app** (Heroku) — [DeckDuel](https://deckduel-4d85491488ea.herokuapp.com/)



---

## Unsolved Problems

At current, the **rules engine** for the game, as well as **Socket.IO functionality** for live gameplay, remain unimplemented, though both are currently in the works, and will be deployed very soon.

There are some ongoing styling issues, causing certain elements of the UI that are meant to be scrollable upon content overflow *not* to scroll.

There also remains a bit of a quirk during gameplay, when moving cards between zones of the game board, where the order of cards spontaneously shifts upon completing the drag-and-drop. I'm quite sure I know what the error is, though, and this will be resolved promptly.



---

## Future Enhancements

There are *quite a few* things that I intend to implement in this project in the coming weeks (besides, of course, the obvious task of *getting the game to actually play*).

Users will be able to **read an illustrated rules overview of the game** before playing their first game.

In addition to initiating a game with a selected opponent from a list of currently online players, a user will be able to **initiate a game with a random opponent**.

Users will be able to **adjust the volume of in-game music and sound effects** via a settings panel.

Users will be able to **earn in-game currency**, to purchase various game elements.

Users will be able to **pause an in-progress game** and return to it later to finish it.

I want to offer **periodic additional releases of new cards** that users can purchase with their in-game currency and incorporate into their decks for future games.


