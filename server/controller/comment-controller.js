import comment from "../model/comment.js"

export const newComment = async(request, response) => {
    try {
        const comments = await new comment(request.body);
        comments.save();
        return response.status(200).json({msg: 'comment saved successfully'})
    } catch (error) {
        return response.status(500).json({msg: error.message})
    }
}
export const getComment = async(request, response) => {
    try {
        const comments = await comment.find({id : request.params.id});
        return response.status(200).json(comments)
    } catch (error) {
        return response.status(500).json({msg: error.message})
    }
}
export const deleteComment = async(request, response) => {
    try {
        const comments = await comment.findById(request.params.id);
        if (!comments){
            return response.status(400).json({msg: 'comment not found'})
        }
        comments.delete();
        return response.status(200).json({msg: 'comment deleted  successfully'})
    } catch (error) {
        return response.status(500).json({msg: error.message})
    }
}