import { createStore } from 'vuex';

const store= createStore({
    state(){
        return {
            memories: [
                {
                    id:"m1",
                    image: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg",
                    title: "A trip into the mountains",
                    description: "It was a really nice trip!"
                },
                 {
                    id:"m2",
                    image: "https://cdn.pixabay.com/photo/2020/12/14/13/51/jasper-national-park-5830929_960_720.jpg",
                    title: "A trip to Jasper National Park",
                    description: "It was a quick break from TechCareers!"
                }, {
                    id:"m3",
                    image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
                    title: "Celebrated New Year by baking a cake",
                    description: "It was a nice experience baking again after a long time!"
                },
            ],
            
        };
    },
    mutations: {
        addMemory(state, payload ){
            const newMemory ={
                id: new Date().toISOString(),
                title: payload.title,
                image: payload.image,
                description: payload.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, payload) {
            context.commit('addMemory', payload);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory)=> memory.id === memoryId);
            };
        }
    }
});

export default store;