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
      i.f1a{
        width: 50px;
        transform: scale(5);
        margin: 0 10px;
        display: inline-block;
      }
      
      .star-container{
        direction: rtl;
        /* inline elements will be flowing right to left*/
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
      .star-empty {
        font-family: FontAwesome;
        content: "\f000";
        display: inline-block;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 900;
        height: 300px;
        width: 300px;
        border: 1px solid red;
      }
      .xyz1:before {
        content: "\u2BEB";
      }
      .right {
        position: absolute;
        color: red;
      }

      .left {
        position: absolute;
        color: orange;
      }
        .right:hover ~ .left {
        color: orange;
      }
      .fa-star-half:hover::before {
        content: "\f000";
        color: yellow;
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
      </style>
      <div class="container">
      <div class="feedback-container">
        <!-- <a aria-label="1" 
          href="#" 
          class="level-1" data-num="1" 
          data-hover-rating="1" data-original-title="1">
            <iron-icon icon="star-border"></iron-icon>
        </a>
        <a aria-label="1" 
          href="#" 
          class="level-1" data-num="2" 
          data-hover-rating="1" data-original-title="2">
            <iron-icon icon="star-border"></iron-icon>
        </a>
        <a aria-label="1" 
          href="#" 
          class="level-1" data-num="1" 
          data-hover-rating="1" data-original-title="1">
            <iron-icon icon="star-border"></iron-icon>
      </a> -->
      <label for="review-stars-react-9-input-1"
       data-purpose="review-star-input-0.5-label" class="fa fa-3x fa-star-o review-star-input--review-star--left--3Symo review-star-input--review-star--filled--VK-bI">
      <input type="radio" class="sr-only1" name="review-stars-react-8" 
      id="review-stars-react-9-input-1" aria-label="0.5" 
       data-purpose="review-star-0.5-input" value="0.5">
			</label>
    <!-- <i class="fa fa-3x fa-star-o"></i>
    <i class="fa fa-3x fa-star-half left"></i>
    <i class="fa fa-3x fa-star-half-full"></i>
    <i class="fa fa-3x fa-star"></i>
    <i class="fa fa-3x fa-star-half-empty"></i> -->


    <!-- <div class="rating">
      <input type="radio" name="rating" value="5" id="5" checked="{{myValue::change}}"><label for="5">☆</label>
      <input type="radio" name="rating" value="4" id="4" checked="{{myValue::change}}"><label for="4">☆</label>
      <input type="radio" name="rating" value="3" id="3" checked="{{myValue::change}}"><label for="3">☆</label>
      <input type="radio" name="rating" value="2" id="2" checked="{{myValue::change}}"><label for="2">☆</label>
      <input type="radio" name="rating" value="1" id="1" checked="{{myValue::change}}"><label for="1">☆</label>
    </div> -->
    ==={{myValue}}++++
    
      </div>

     
      <i class="fa fa-3x fa-star-o custom" ></i>
      <i class="fa fa-3x fa-star-half custom "></i>
      <i class="fa fa-3x fa-star custom"></i>
      
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

      <!-- <i class="fa fa-3x fa-star-o custom" ></i>
      <label for="review-5">
        <input id="review-5" value="5" checked="{{checked::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star-half custom "></i>
      </label>
      <label for="review-4.5">
        <input id="review-4.5" value="{{myVal::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star custom"></i>
      </label>

      <i class="fa fa-3x fa-star-o custom margin" ></i>
      <label for="review-4.0">
        <input id="review-4.0" value="{{myVal::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star-half custom margin"></i>
      </label>
      <label for="review-3.5">
        <input id="review-3.5" value="{{myVal::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star custom margin"></i>
      </label>

      <i class="fa fa-3x fa-star-o custom margin-1" ></i>
      <label for="review-3.0">
        <input id="review-3.0" value="{{myVal::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star-half custom margin-1"></i>
      </label>
      <label for="review-2.5">
        <input id="review-2.5" value="{{myVal::change}}" type="radio" name="abc"/>
        <i class="fa fa-3x fa-star custom margin-1"></i>
      </label> -->
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


<i class="fa fa-3x fa-star-o" style="position: relative;left: -25px;"></i>
          <label for="review-{{rating.0.id}}">
            <input id="review-{{rating.0.id}}" class="sr-only"
              value="{{rating.0.value}}" 
              checked={{rating.0.checked::change}} 
              type="radio" name="abc"/>
            <i class="fa fa-3x fa-star-half" style="position: absolute;left: 14px;"></i>
          </label>
          <label for="review-{{rating.1.id}}">
            <input id="review-{{rating.1.id}}" class="sr-only"
              value="{{rating.1.id}}::change}}" 
              checked={{rating.1.checked::change}} 
              type="radio" name="abc"/>
            <i class="fa fa-3x fa-star" style="position: absolute;left: 14px;"></i>
        </label>