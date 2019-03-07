import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/neon-animation/neon-animations.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './review-rating-class.js';


//star-border,star-half, star, max character min character for review
/**
 * `progress-stepper`
 * A simple progress-stepper polymer 3.0 component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ReviewRating extends PolymerElement {
  static get template() {
    return html`
     <link rel="stylesheet" href="../node_modules/font-awesome/css/font-awesome.css">
      <style include="review-rating-class"></style>
      <style>
      a{
        text-decoration: none;
      }
    
      .custom {
        position: absolute;
      }
      .fa-star-o{
        color: red;
        z-index: 333;
      }
      .fa-star{
        opacity: 0;
        z-index: 3338;
      }
      .fa-star-half{
        opacity: 0;
      }
      .fa-star-half{
        z-index: 3343;
      }
      .fa-star-half:hover, .fa-star:hover {
        opacity: 1;
        color:red;
      }

      .fa-star-o:hover{
        color: black;
        z-index: 333;
      }
      .container{
        display: flex;
        flex-direction: row;
        flex-flow: justify-content;
      }

      .star-container {
        display: inline-block;
      }

      </style>
      <div class="container" style="border: 1px solid black">
      <div class="feedback-container">
      </div>

     
    <div class="star-container">
      <template is="dom-repeat" items="{{ratings}}" as="rating">
        <div style="height:40px; width: 40px; display: inline-block; margin: 0 5px;">
        <i class="fa fa-3x fa-star-o"></i>
        <label for="review-{{rating.0.id}}">
          <input id="review-{{rating.0.id}}" class="sr-only"
            value="{{rating.0.value}}" 
            checked={{rating.0.checked::change}} 
            type="radio" name="rating"/>
          <i class="fa fa-3x fa-star-half" style="position: relative;top: -48px;left: -5px;"></i>
        </label>
      <label for="review-{{rating.1.id}}">
        <input id="review-{{rating.1.id}}" class="sr-only"
          value="{{rating.1.id}}" 
          checked={{rating.1.checked::change}} 
          type="radio" name="rating"/>
        <i class="fa fa-3x fa-star" style="position: relative;top: -96px;"></i>
      </label>
        </div>
      </template>
    </div>
      <!--
     
      <paper-button raised class="indigo" on-click="openDialog">Submit Your Feedback</paper-button>
      -->
      
      
      
      <paper-dialog id="myDialog" 
        modal 
        entry-animation="scale-up-animation" 
        exit-animation="scale-down-animation" 
        with-backdrop>
          <span class="icon-close no-padding">
            <iron-icon icon="close" on-tap="closeDialog"></iron-icon>
          </span>
          <div class="check">
            <iron-icon class="icon-check" icon="check"></iron-icon>
          </div>
          <div class="message">
            Thanks for your feedback
          </div>
        </paper-dialog>
     
      </div>
    `;
  }
  static get properties() {
    return {
      myValue: {
        type: Boolean,
        value: false
      },
      ratings: {
        type: Array,
        value: function() {
          return [
            [
              { 'id': 2, 'checked': false, 'value': '2' },
              { 'id': 1.5, 'checked': false, 'value': '1.5' }
            ],
                [
                  { 'id': 1, 'checked': false, 'value': '1' },
                  { 'id': 0.5, 'checked': false, 'value': '0.5' },
                ]
                // ,
                // [
                //   { 'id': 2.5, 'checked': false, 'value': '2.5' },
                //   { 'id': 3, 'checked': false, 'value': '3' }
                // ],
                // [
                //   { 'id': 3.5, 'checked': false, 'value': '3.5' },
                //   { 'id': 4, 'checked': true, 'value': '4' }
                // ],
                // [
                //   { 'id': 4.5, 'checked': false, 'value': '4.5' },
                //   { 'id': 5, 'checked': false, 'value': '5' }
                // ]
              ];
        }
      }
    };
  }

static get observers() {
  return [
    'ratingsChanged(ratings.*)'
  ];
}

ratingsChanged(newVal){
  console.dir(newVal);
}

  static get is() {
    return 'review-rating';
  }

  callme(event) {
    console.log(event);
  }
  
  openDialog() {
    this.$.myDialog.opened=true;
  }
  closeDialog() {
    this.$.myDialog.opened=false;
  }
}

window.customElements.define(ReviewRating.is, ReviewRating);
