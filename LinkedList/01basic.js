class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    size(){
        let current = this.head;
        let size = 0;
        while(current.next){
            size++;
            current = current.next;
        }

        return size;
    }

    addAtIndex(data, index){

        if(index<0 || index > this.size()){
            console.error("Invalid Index");
            return
        }
        const newNode = new Node(data);

        let current = this.head;

        while(index > 1){
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeFirst(){
        
    }
}

let newLL = new LinkedList();
newLL.addFirst(5)
newLL.addFirst(4)
newLL.addLast(6)
newLL.addAtIndex(12, 1)
console.log(newLL)