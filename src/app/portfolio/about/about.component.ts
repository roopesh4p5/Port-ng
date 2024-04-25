import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  likes = [
    {
      title: "Anime Enthusiast",
      description: "I'm a big fan of anime and enjoy exploring the diverse and captivating worlds created by talented animators. From thrilling action to heartfelt stories, I appreciate the artistry and storytelling found in anime."
    },
    {
      title: "Marvel Devotee",
      description: "As a Marvel aficionado, I find inspiration in the epic tales of superheroes and villains. The Marvel Universe never fails to ignite my imagination and keeps me hooked with its intricate storylines and dynamic characters."
    },
    {
      title: "Biking Enthusiast",
      description: "There's nothing quite like the freedom of the open road on two wheels. I'm a passionate biker who loves the adrenaline rush of cruising through scenic routes and exploring new destinations on my trusty bike."
    },
    {
      title: "PC Gaming Aficionado",
      description: "Gaming isn't just a hobby for me—it's a way of life. I'm deeply immersed in the world of PC gaming, where I've embarked on thrilling adventures in titles like Far Cry series, The Last of Us, Uncharted 4, and God of War. From epic battles to heart-pounding narratives, gaming fuels my imagination and creativity."
    }
  ];

  dislikes = [
    {
      title: "Lack of Creativity",
      description: "I'm not a fan of monotony or uninspired ideas. Whether it's in design or development, I thrive on innovation and pushing the boundaries of what's possible."
    },
    {
      title: "Closed-mindedness",
      description: "I believe in the power of diversity and inclusion. I'm not fond of narrow-mindedness or discrimination of any kind and strive to create inclusive spaces where everyone's voice is heard and respected."
    },
    {
      title: "Technical Limitations",
      description: "While I enjoy the challenges of problem-solving in web development, I'm not a fan of being held back by technical constraints. I'm always eager to explore new technologies and techniques to push the limits of what can be achieved."
    }
  ];
}
