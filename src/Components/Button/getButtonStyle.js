
function getButtonStyleType(val){
    const primaryButtonStyling = "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";
    const secondaryButtonStyling = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 hover:bg-yellow-600 hover:border-yellow-900";
    const errorButtonStyling = "bg-red-500 border border-red-700 hover:bg-red-600 hover:border-red-900";
    const success = "bg-green-500 border border-green-700 hover:bg-green-600 hover:border-green-900"
    if(val==='primary'){
        return primaryButtonStyling;
    }
    else if(val === 'secondary'){
        return secondaryButtonStyling
    }
    else if(val === 'warning'){
        return warningButtonStyling
    }
    else if(val === 'error'){
        return errorButtonStyling
    }
    else if(val=='success'){
        return success
    }
}

export default  getButtonStyleType ;