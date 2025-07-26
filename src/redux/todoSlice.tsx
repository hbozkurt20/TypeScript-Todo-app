import { createSlice } from '@reduxjs/toolkit' // state + actions + reducers = slice.
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' //interfacelerde type ile import et
import type { TodoİnitialState, TodoType } from '../types/type'

//* State: Uygulamanın o anki verisidir (örnek: kullanıcı bilgisi, sepet içeriği).

//* Action: State’i değiştirmek için gönderilen bir nesnedir (örnek: type: "INCREMENT").

//* Reducer: Action’a göre state’i değiştiren saf bir fonksiyondur.

//* Özet:
//* Kullanıcı → Action gönderir → Reducer çalışır → Yeni State oluşur.



const initialState: TodoİnitialState = {  //*başlangıç state i
    todos: [],
}

export const counterSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  //* action'lar geldiğinde uygulama state'ini nasıl değiştireceğini tanımlayan saf fonksiyonlardır. Redux Toolkit kullanıyorsan, createSlice içinde reducer'lar otomatik olarak yapılandırılır.

        createTodo: (state: TodoİnitialState, action: PayloadAction<TodoType>) => { //payload a tür vermeni sağlııyor
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state: TodoİnitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        }, //map içindeki filter eşit olan es geç eşit olmayanları al demek find tam tersi
        updateTodo: (state: TodoİnitialState, action: PayloadAction<TodoType>) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;  // Güncellenen todo
                } else {
                    return todo;            // Değişmeyen todo
                }
            });
        }
        // içdeki saf fonksiyonlar Kısaca:
        // State'i doğrudan değiştiriyor gibi yazarsın ama arkada aslında değişmez bir kopya oluşturulur. Bu hem yazımı kolaylaştırır hem güvenlidir.

    },
})

// Action creators are generated for each case reducer function
export const { createTodo, removeTodo , updateTodo } = counterSlice.actions // dispatch edebilmen için

export default counterSlice.reducer   //* reducer, store’un state’i nasıl yöneteceğini tanımlar.
//*Her action geldiğinde, reducer çağrılır.

//*Yeni state’i döndürür.

//! {  örn action;
//   type: 'cart/addItem',
//   payload: { id: 1, name: 'Kitap', price: 99 }
// }

//! Notlar --------------

//! PayloadAction nedir ve ne için kullanılır
// import type { PayloadAction } from '@reduxjs/toolkit'
// Ne işe yarar?
// Sadece tipi (PayloadAction) import eder, JavaScript'e çevrilince bu import kodu etkilemez. Performans ve temizlik sağlar.

// Neden kullanılır?
// TypeScript’te sadece tipleri kullanmak istiyorsan import type kullanırsın.

// Örnek:
// ts
// Kopyala
// Düzenle
// function addUser(state, action: PayloadAction<string>) {
//   // action.payload bir string olur
// }
// Yani: PayloadAction<T> → action.payload'ın türünü belirlemek için kullanılır.


//! action nedir

// Redux Toolkit’te (ve genel olarak Redux’ta) action, bir olayın ne olduğunu tanımlayan JavaScript nesnesidir. State’i değiştirecek olayları temsil eder. Detaylı şekilde adım adım anlatayım:

// 🔷 1. Action Nedir?
// Bir action, bir şeyi yapmak istediğimizi Redux'a söylemenin yoludur. Örneğin:

// Kullanıcı giriş yaptı.

// Bir ürün sepete eklendi.

// Sayaç 1 arttırıldı.

// Bu olayları tanımlayan nesnelerdir.

// Örnek:
// ts
// Kopyala
// Düzenle
// {
//   type: 'cart/addItem',
//   payload: { id: 1, name: 'Kitap', price: 99 }
// }
// 🔷 2. Action’ın Parçaları
// ✅ type:
// Zorunludur.

// Bu action’un ne işe yaradığını açıklar.

// Her zaman bir string olur.

// Reducer içinde hangi action’a karşılık işlem yapılacağını type ile ayırt ederiz.

// ✅ payload:
// Genellikle birlikte gönderilen veridir.

// Opsiyoneldir ama çoğu zaman kullanılır.

// Örnek: Eklemek istediğin ürün, kullanıcı bilgisi vs.

// ✅ Diğer alanlar (isteğe bağlı):
// meta, error gibi özel alanlar da olabilir ama Redux Toolkit’te genelde type ve payload yeterlidir.

// 🔷 3. Action Ne Zaman Oluşur?
// Action'lar genellikle:

// Bir kullanıcı etkileşimi ile (butona basmak gibi)

// Bir API çağrısı ile

// Bir otomatik işlem ile (zamanlayıcı, interval vs.) tetiklenir.

// Ve sonra dispatch() ile reducer’a gönderilir.

//! reducer nedir
// Reducer:

// Mevcut state'i ve gelen action'ı alır.

// Yeni bir state döner.

// Eski state'i doğrudan değiştirmez (ama Redux Toolkit içinde Immer sayesinde sanki değiştiriyormuş gibi yazabilirsin).

// | Parça         | Açıklama                                                          |
// | ------------- | ----------------------------------------------------------------- |
// | `state`       | Şu anki durum                                                     |
// | `action`      | Ne yapılmak istendiği ve varsa `payload`                          |
// | `increment()` | Sayacı 1 artırır (Immer ile direkt state değiştirme gibi yazılır) |
// | `decrement()` | Sayacı 1 azaltır                                                  |
// | `addAmount()` | Gelen payload kadar artırır                                       |

//  Örnek Akış
// Kullanıcı butona basar → dispatch(increment())

// Bu action reducer’a gider.

// Reducer state.value += 1 yapar.

// Yeni state oluşturulur → UI yeniden render edilir.

//! reducer nedir

// store → tüm global state’i saklar.

// reducer → gelen action’a göre statei nasıl değiştireceğini belirler.

// configureStore → reducer’ları birleştirip store’u oluşturur.

// İstersen useSelector, dispatch, ya da birden fazla reducer nasıl eklenir konusuna geçebiliriz.