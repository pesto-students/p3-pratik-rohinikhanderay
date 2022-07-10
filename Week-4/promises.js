const customPromiseState = {

    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    REJECTED: 'REJECTED'

}
class customPromise {

    constructor(fn){

        this.customPromiseState = customPromiseState.PENDING
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.catchFn = null;
        this.thenFn = null;
        fn(this.resolver, this.rejector)

    }


    resolver(resolvedData){

        if(this.customPromiseState === customPromiseState.PENDING){

            this.thenFn && this.thenFn(resolvedData)
        }

        this.customPromiseState = customPromiseState.RESOLVED
    }

    rejector(rejectedData){

        if (this.customPromiseState === customPromiseState.PENDING) {

            this.catchFn && this.catchFn(rejectedData)
        }

        this.customPromiseState = customPromiseState.REJECTED

    }

    then(thenFn) {

        this.thenFn = thenFn;
        return this

    }

    catch(catchFn){

        this.catchFn = catchFn;
        return this

    }
}

const getNumber = () =>{

    return new customPromise((res,rej) => {

        const randomNum = parseInt(Math.random() * 100 , 10);

        setTimeout(() => {

            if (randomNum % 5 === 0) {

                rej(`Rejected with num ${randomNum}`)

            }

            res(`Resolved with num ${randomNum}`)

        }, randomNum * 10)
    })
}


getNumber().then(val => console.log(val))