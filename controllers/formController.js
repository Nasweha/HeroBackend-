const griviences = require("../model/formSchema");





exports.getAllGrievances = async (req, res) => {
    try {
        const allgrievances = await griviences.find();
        res.status(200).json(allgrievances);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching grievances' });
    }
};



exports.getGrievanceById = async (req, res) => {
    const { id } = req.params;
    try {
        const grievance = await griviences.findById(id);
        if (!grievance) {
            return res.status(404).json({ message: 'Grievance not found' });
        }
        res.status(200).json(grievance);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching grievance details' });
    }
};



exports.viewgriviences = async(req,res)=>{
    const {id} = req.params
    const {status} = req.body
    try{

        const updateGrviences = await griviences.findByIdAndUpdate(id,{status})
        await updateGrviences.save()
        res.status(200).json(updateGrviences)

       

    }
    catch(error){
        res.status(500).json(error)
    }
}

exports.deleteGriviences =async(req,res)=>{
    const {id} = req.params
    try{

        const grivrience = await griviences.findByIdAndDelete({_id:id})
        res.status(200).json(grivrience)

       


    }
    catch(error){
        res.status(406).json(error)
    }
}



