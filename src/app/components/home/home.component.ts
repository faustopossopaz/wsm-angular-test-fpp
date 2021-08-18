import { Component, OnInit } from '@angular/core';
import { OptimizerService } from '../../services/optimizer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  optionSelected : any;
  instructions   : string = '';
  actions        : any;
  actionsVariants: [] = [];
  htmlToAdd      : string = '';
  disableButton  : boolean = true;
  buttonChecks   : boolean[] = [];
  showArrow      : boolean = true;


  //content html
  instructionsTitle = 'Instructions'
  optimizationTitle = 'Optimization'
  footerTitle       = 'High CPA'
  footerContent     = 'The Campaign does not have the optimal CPA. Our previous efforts have made our ' +
                      'CPA higher than desired'
  buttonContinue    = 'Continue'

  constructor(private optimizerService: OptimizerService) { }

  ngOnInit(): void {
    //call service for show first element
    this.optimizerService.getContentData().subscribe(
      (data:any) => {
        this.htmlToAdd = data[0].itemVariants[0].description;
        console.log(data)
        this.actions = data[0].actions;
        //this.actionsVariants = this.actions.name;
      },
      (err) => {
        console.log(err)
      })

  }

  clickedItemMenu(optionSelected:any) {
   this.optionSelected = optionSelected;
   this.instructions = this.optionSelected.itemVariants[0].description;
   this.actions = this.optionSelected.actions;
   this.actionsVariants = this.actions.name;
   this.htmlToAdd = this.instructions;
  }

  getCheckBox(e:any, i:number) {
    //capture text to change color
    let textChangeColor = document.getElementById('text'+i);

    //equals elements to array
    this.buttonChecks.length = this.actions.length;

    //store in array if target is checked
    if(e.target.checked) {
      this.buttonChecks.splice(i, 1, true);
      if (textChangeColor) {
        textChangeColor['style'].color = '#189A36';
      }
    } else {
      this.buttonChecks.splice(i, 1, false);
      if (textChangeColor) {
        textChangeColor['style'].color = '#14375F';}
    }

    //check array values for disabled button
    (this.buttonChecks.includes(true)) ? this.disableButton = false : this.disableButton = true;
  }

  changeArrowDirection(e:any, i:number) {
    let arrow = document.getElementById('arrow' + i);
    if(arrow) {
      if (e.target.ariaExpanded === 'true') {
        arrow['style'].transform = 'scaleY(-1)';
      } else {
        arrow['style'].transform = 'scaleY(1)';
      }
    }
  }

}
