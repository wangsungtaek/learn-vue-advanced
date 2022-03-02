import ListView from './ListView.js';

export default function createListView(name) {
    return {
        name: name,
        render(createElement) {
            return createElement(ListView);
        }
    }
}