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
      
      .star-container{
        direction: rtl;
      }
      .rating {
        display: flex;
        flex-direction: row-reverse;
      }
      .rating > input{
        display:block;
      }
      .rating > label {
        position: relative;
        width: 1.1em;
        font-size: 15vw;
        color: #FFD700;
        cursor: pointer;
      }
      .rating > label::before{
        content: "\u2605";
        position: absolute;
        opacity: 0;
      }

      .rating > label:hover:before,
      .rating > label:hover ~ label:before {
        opacity: 1 !important;
      }
      .rating > input:checked ~ label:before{
        opacity: 1;
      }

 
      </style>
      <div class="container">
      <div class="feedback-container">

  <div class="rating">
      <input type="radio" name="rating" value="5" id="5" checked="{{myValue::change}}"><label for="5">☆</label>
      <input type="radio" name="rating" value="4" id="4" checked="{{myValue::change}}"><label for="4">☆</label>
      <input type="radio" name="rating" value="3" id="3" checked="{{myValue::change}}"><label for="3">☆</label>
      <input type="radio" name="rating" value="2" id="2" checked="{{myValue::change}}"><label for="2">☆</label>
      <input type="radio" name="rating" value="1" id="1" checked="{{myValue::change}}"><label for="1">☆</label>
    </div>
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
    };
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
