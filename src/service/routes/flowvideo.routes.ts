import {Router} from 'restify-router';
import {videoFlowController} from '../controllers/videoflow.controller';

const routerFlowInstance = new Router();


routerFlowInstance.post('/processvideo', async (req, res) => {
  try {
    const {inputvideo, inputvideo2, inputvideo3, inputvideo4} = req.body;
    res.json({inputvideo, inputvideo2, inputvideo3, inputvideo4});
    await videoFlowController.executeProcess(inputvideo);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerFlowInstance;
