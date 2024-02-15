export function Dashboard(){
    return <div>
        <div>
           <header>
            <div className=" m-5">
            <ul class="flex justify-between">
  <li class="mr-6">
    <a class="text-blue-500 text-lg font-bold  hover:text-blue-800" href="#">Sasta PayTM</a>
  </li>
  <li class="mr-6">
    <span>Hello,</span>
    <a class="text-custom-blue font-semibold hover:text-blue-800" href="#">User</a>
    
  </li>
  
 
</ul>
            </div>
            <hr />
            </header> 
            <div className=" m-6 text-md font-medium">
                <span>Your Balance </span>
                <span className="font-bold">$5000</span>
            </div>
            <div>
                <span className="font-bold text-lg m-6">Users</span>
                <div>
                <input  type="text"   className="p-2.5 rounded-lg border-2 border-gray-300  w-72 "/>                </div>
            </div>
        </div>
    </div>
}