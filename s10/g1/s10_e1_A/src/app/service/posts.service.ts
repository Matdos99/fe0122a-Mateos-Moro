import { Post } from "../interface/post";

let posts: Post[] = [
  {
    id: 1,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in mattis odio, a egestas est. Ut porta metus ut augue luctus, ac efficitur sapien scelerisque. Donec aliquet, mauris sit amet sagittis vestibulum, ipsum dui dictum tellus, ac bibendum quam libero sed arcu. Ut dictum ipsum lacus, in posuere ante pretium et. Integer non nunc congue, faucibus diam nec, gravida felis. Donec bibendum malesuada commodo. Curabitur vitae tristique erat. Nulla sed lectus consectetur, fringilla dui sit amet, iaculis metus. Mauris placerat libero nec orci dictum varius sit amet at tortor. Suspendisse sed turpis a eros varius ultrices ac quis risus. Vestibulum consectetur ullamcorper ligula, eu posuere arcu tincidunt id. Vestibulum ut laoreet risus. Sed vel faucibus libero, non dignissim ex.',
    title: 'Lorem ipsum dolor sit amet',
    active: true,
    type: 'notizie',
    author:'giulio'
  },
  {
    id: 2,
    body: 'Aliquam tristique laoreet nunc, malesuada vestibulum nisi consectetur vel. In convallis dolor et orci viverra vulputate eleifend dapibus purus. Aenean eu augue in diam cursus tincidunt sed in quam. Nam aliquet commodo augue, vel bibendum arcu sagittis nec. Aliquam erat volutpat. Praesent scelerisque imperdiet risus sit amet pretium. Curabitur viverra massa a sollicitudin consequat. Vestibulum efficitur lectus lacinia, laoreet ante ac, faucibus ante. Nam non porta velit. Mauris blandit quam ex, nec efficitur augue placerat commodo. Mauris enim dui, faucibus non pharetra non, auctor sit amet dolor.',
    title: 'Aliquam tristique laoreet nunc',
    active: false,
    type: 'politica',
    author:'Marco'
  },
  {
    id: 3,
    body: 'Morbi ut finibus nibh. Vestibulum accumsan rhoncus porta. Quisque tristique consectetur volutpat. Integer lobortis, diam eu rhoncus rhoncus, urna ligula cursus est, a lacinia erat ante in tellus. Integer ornare, libero nec viverra accumsan, ipsum magna consectetur sem, id placerat mauris nulla eget mi. Nam sit amet odio sodales, mattis nisi nec, viverra urna. Nam molestie lorem lorem, vel dictum purus tincidunt eget. Quisque eleifend viverra augue et maximus. Morbi eget rutrum dui. Aliquam aliquet nulla purus, a cursus tortor elementum ut. Aenean placerat, elit id laoreet malesuada, augue est posuere sapien, id fermentum turpis tellus eu nunc. Donec sagittis elit non eros finibus, a auctor mauris vestibulum. Proin quis molestie purus, id semper purus. Nulla facilisi.',
    title: 'Morbi ut finibus nibh',
    active: true,
    type: 'formazione',
    author:'ajeje brazzorf'
  },
  {
    id: 4,
    body: 'Suspendisse commodo massa et tellus lobortis condimentum. Praesent tincidunt, turpis quis congue venenatis, ante turpis bibendum sapien, eget mollis est augue at nulla. Suspendisse justo sapien, ultricies a efficitur at, faucibus vitae tellus. Vivamus sed ligula et orci egestas pretium. Nam nec eleifend diam, vel mattis sem. Vivamus iaculis, sem ac molestie tempus, massa erat suscipit justo, ac ultrices erat ligula id tellus. Mauris sem leo, aliquet et tellus in, convallis facilisis orci. Vestibulum orci justo, volutpat in blandit et, posuere finibus velit. Praesent vehicula lectus in massa aliquam malesuada. Fusce at aliquet quam. Aliquam venenatis venenatis posuere. Pellentesque tristique mi id est aliquet viverra. Cras convallis turpis nec lorem rutrum, quis venenatis lectus porta.',
    title: 'Suspendisse commodo massa',
    active: false,
    type: 'notizie',
    author:'Giacomo'
  }
];

export function recupera() {
  return posts;
}

export function aggiorna(data: Partial<Post>, id: number) {
  posts = posts.map(post => post.id == id ? { ...post, ...data } : post);
  return posts.find(post => post.id == id) as Post;
}
