require "rubygems"
require "em-websocket-server"

class EchoServer < EM::WebSocket::Server

  def on_connect
    EM::WebSocket::Log.debug "Connected"
  end

  def on_receive msg
    EM::WebSocket::Log.debug "Message " + msg
    send_message msg
  end

  def on_error error
    EM::WebSocket::Log.debug error.to_s
  end
  
  def on_disconnect 
    EM::WebSocket::Log.debug "Disconnected"
  end
  
end

EM.run do
	EM.start_server "0.0.0.0", 4532, EchoServer
end
