import React from "react"
import Backdrop from '../backdrop';
import Modal from '../modal';
import RadioGroup from '../radioGroup';

const questionnaire = props => (

  <React.Fragment>
    { this.state.modalRendering && <Backdrop/> }
    { this.state.modalRendering && (
      <Modal
        title="Meal Planner"
        canCancel
        canConfirm
        onCancel={this.modalCancelHandler}
        onConfirm={this.generateMeals}
      >
      <form>
        <div className="radio-label__container">
          <RadioGroup 
            radio={[
              {id: "diet", name:"diet", value:"vegan"},
              {id: "diet", name:"diet", value:"vegetarian"},
              {id: "diet", name:"diet", value:"paleo"},
              {id: "diet", name:"diet", value:"keto"},
              {id: "diet", name:"diet", value:"anything"},
            ]}
          />
        </div>
        <div className="form-text__container">
          <div className="form-control">
            <label htmlFor="macros">Macros</label>
            <input type="number" id="macros" ref={this.titleElRef} placeholder="Enter Calorie Goal"/>
          </div>
          <div className="form-control">
            <label htmlFor="fat">Fat</label>
            <input type="number" id="fat" ref={this.fatElRef} placeholder="Enter Fat in grams" />
          </div>
          <div className="form-control">
            <label htmlFor="protein">Protein</label>
            <input type="number" id="protein" ref={this.proteinElRef} placeholder="Enter Protein in grams"/>
          </div>
          <div className="form-control">
            <label htmlFor="carbs">Carbs</label>
            <input type="number" id="carbs" ref={this.carbsElRef} placeholder="Enter Carbs in grams"/>
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight</label>
            <input type="number" id="weight" ref={this.weightElRef} placeholder="Enter lbs"/>
          </div>
          <div className="form-control">
            <label htmlFor="desiredWeight">Desired Weight</label>
            <input type="number" id="desiredWeight" ref={this.desiredWeightElRef} placeholder="Enter Desired lbs"/>
          </div>
        </div>
        <div className="radio-label__container">
          <label htmlFor="priceLimit">Price Limit</label>
          <RadioGroup 
            radio={[
              {id: "price", name:"price", value:"<$5"},
              {id: "price", name:"price", value:"<$10"},
              {id: "price", name:"price", value:"<$15"},
              {id: "price", name:"price", value:"No Limit"},
            ]}
          />
        </div>
      </form>
    </Modal>
    )}
  </React.Fragment>
)

export default questionnaire;