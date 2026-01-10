import { tickets } from "./data/tickets";

function TicketList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-auto text-black ">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card bg-white shadow-md  rounded-lg">
          <div className="card-body px-7 py-5">
            {/* Ticket title */}
            <span className="flex justify-between">
              <h2 className="card-title text-lg">{ticket.title}</h2>
              <span className="badge badge-outline">{ticket.status}</span>
            </span>
            

            {/* Ticket description */}
            <p className="text-gray-600 mt-1">{ticket.description}</p>

            {/* Customer, date, and priority */}
            <div className="flex justify-between mt-3 text-sm text-gray-500">
              <span>#{ticket.id}</span>
              <span
                className={`badge ${
                  ticket.priority === "High"
                    ? "badge-error"
                    : ticket.priority === "Medium"
                    ? "badge-warning"
                    : "badge-success"
                }`}
              >
                {ticket.priority}
              </span>
              <span>{ticket.customer}</span>
              <span>{ticket.createdAt}</span>
            </div>

            {/* Priority & Status badges */}
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketList;
