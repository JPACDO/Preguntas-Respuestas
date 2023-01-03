
export const getDatas = async ( url1 ) => {
    // const url = `https://desafio-holajunior-production.up.railway.app/api/questions`;
    const url = url1;
    const resp = await fetch( url );
    const { data } = await resp.json();

    return data;
 }

