import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends,
        clicked: [],
        score: 0
    };

    removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
    };

    incrementClick = id => {

        if (this.state.clicked.indexOf(id) === -1) {
            this.state.clicked.push(id);
            console.log("CLICKED");
            //console.log(this.state.clicked);

            const newScore = this.state.score + 1;
            this.setState({ score: newScore });
            //console.log(this.state.clicked);
            this.shuffle();
            //console.log(this.state.clicked);
            this.render();

            //console.log(this.state.score);
        } else {
            alert("Already clicked!");
            const newScore = 0;
            //this.shuffle(this.state.clicked);
            this.setState({ score: newScore });

        }

    }

    shuffle = () => {
        let a = this.state.friends;
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (  <Wrapper>
        <Title> Friends List | Score: { this.state.score } </Title> {
            this.state.friends.map(friend => ( <
                FriendCard incrementClick = { this.incrementClick }
                removeFriend = { this.removeFriend }
                clicks = { friend.clicks }
                id = { friend.id }
                key = { friend.id }
                name = { friend.name }
                image = { friend.image }
                />
            ))
        }

        </Wrapper>
    );
}
}

export default App;