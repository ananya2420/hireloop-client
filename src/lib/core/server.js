const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const serverFetch = async (path) => {
    try{
   const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return await res.json();
    }catch(error){
      console.log(error);
      return {};
    }
    
}


export const serverMutation = async (path, data) => {
    try{
     const res = await fetch(`${baseUrl}${path}`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // handle 401, 404, 403

    return await res.json();
    }catch(error){
        console.log(error);
        return {}
    }
    
}