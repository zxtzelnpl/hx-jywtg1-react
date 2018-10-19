import React from 'react';
import {Route} from 'react-router-dom';

import InstructionPlanBreif from './views/InstructionPlanBreif';
import InstructionPlanHead from './views/InstructionPlanHead';
import InstructionPlanSXLY from './views/InstructionPlanSXLY';
import InstructionPlanZJGD from './views/InstructionPlanZJGD';
import InstructionPlanCZZL from './views/InstructionPlanCZZL';

const InstructionPlan = ({match})=>(
  <div>
    <InstructionPlanHead />
    <Route path={`${match.url}/sxly`} component={InstructionPlanSXLY}/>
    <Route path={`${match.url}/zjgd`} component={InstructionPlanZJGD}/>
    <Route path={`${match.url}/czzl`} component={InstructionPlanCZZL}/>
  </div>
)

export {InstructionPlan,InstructionPlanBreif};
