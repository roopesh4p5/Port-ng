import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component {
  interests: any[] = [
    {
      title: 'Drawing',
      description: 'I have a passion for drawing and enjoy exploring various techniques and mediums to express my creativity.',
      imagePath: './../../../assets/drawing.jpg'
    },
    {
      title: 'Raspberry Pi and Arduino',
      description: 'I\'m deeply fascinated by Raspberry Pi and Arduino boards, leveraging them to develop innovative projects, experiment with different operating systems, and craft custom solutions.',
      imagePath: './../../../assets/raspberry.png'
    },
    {
      title: 'CCTV Cameras',
      description: 'My expertise extends to CCTV cameras, encompassing their setup, configuration, and optimization to ensure effective surveillance solutions.',
      imagePath: './../../../assets/cctv.png'
    },
    {
      title: 'Electrical Work',
      description: 'With hands-on experience in electrical work, including soldering and troubleshooting, I\'m adept at handling various electrical tasks with precision and safety.',
      imagePath: './../../../assets/electric.png'
    },
    {
      title: 'Exploring Niche Technologies',
      description: 'I enjoy delving into unconventional technologies and experimenting with unconventional gadgets, leveraging them to expand my knowledge and fuel my curiosity.',
      imagePath: './../../../assets/explore.jpg'
    }
  ];
}