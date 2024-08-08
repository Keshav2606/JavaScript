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

    addAt(data, index){

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
        let first = this.head;
        this.head = first.next;
        first.next = null;
    }

    removeLast(){
        let last = this.head;
        while(last.next){
            last = last.next;
        }
        let secondLast = this.head;
        while(secondLast.next != last){
            secondLast.next = secondLast;
        }

        secondLast.next = null;
    }

    removeFrom(index){
        if(index<0 || index > this.size()){
            console.error("Invalid Index");
            return
        }

        let deletingNode = this.head;
        while(index){
            deletingNode = deletingNode.next;
        }
        let prevDeletingNode = this.head;
        while(prevDeletingNode.next != deletingNode){
            prevDeletingNode.next = prevDeletingNode;
        }

        prevDeletingNode.next = deletingNode.next;
        deletingNode.next = null;
    }
}

let newLL = new LinkedList();
newLL.addFirst(5)
newLL.addFirst(4)
newLL.addLast(6)
newLL.addAt(12, 1)
newLL.removeFirst()
console.log(newLL)