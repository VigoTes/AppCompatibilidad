<!DOCTYPE html>
<html>
<head>
	 <meta charset="utf-8"/>
     <title>CINE CHIMÚ | Login</title>
	 <link rel="shortcut icon" href="/img/LogoCedepas.png" type="image/png">
  
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta content="width=device-width, initial-scale=1.0" name="viewport"/>      
     <link rel="stylesheet" href="/adminlte/plugins/fontawesome-free/css/all.min.css">
     <link rel="stylesheet" href="/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
     <link rel="stylesheet" href="/adminlte/dist/css/adminlte.min.css">
     <link rel="stylesheet" href="/stylebonis.css">
     <link rel="stylesheet" href="css/login.css">
     <link rel="stylesheet" href="css/style.css">
     <link  rel="stylesheet" href="public/uicons-regular-rounded/css/uicons-regular-rounded.css">
     
</head>
<div class="conteiner">
    <br>
<div class="login-wrap">
	

	<form method="POST" action="{{route('user.logearse')}}">
		@csrf  
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" checked>
				<label for="tab-1" class="tab" style="font-size: xx-large">Iniciar Sesión</label>


			<input id="tab-2" type="radio" name="tab" class="sign-up">
				<label for="tab-2" class="tab"> </label>


			<div class="login-form">
				<div class="sign-in-htm">
					<div class="group">
						<label for="user" class="label" style="font-size: medium">Usuario</label>
						<input type="text" class="input @error('usuario') is-invalid @enderror" placeholder="Ingrese usuario" 
							id="usuario" name="usuario" value="{{old('usuario')}}">
						@error('usuario')
						<span class="invalid-feedback" role="alert" style="font-size: small">
							<strong>{{$message}}</strong>
						</span>
						@enderror
					</div>
					<div class="group">
						<label for="pass" class="label" style="font-size: medium">Contraseña</label>
						<input placeholder="Ingrese contraseña"  id="password" name="password"
							type="password" class="input @error('password') is-invalid @enderror" data-type="password">
						@error('password')
						<span class="invalid-feedback" role="alert" style="font-size: small">
							<strong>{{$message}}</strong>
						</span>
						@enderror
					</div>
				
					<div class="group text-center">
						<button id="ingresar" name="ingresar" type="submit" class="botonPrincipal" value="Ingresar">
              INGRESAR
            </button>
            <div class="div-no-tienes">
                
            
              ¿No tienes cuenta? 

              <a href="{{route('Flujo.VerPaso1')}}">
                <span class="linkRegistrarme">
                  Registrarme
                </span>
                
              </a>
              
             
            
            </div>
					</div>
					<div class="hr"></div>
				 

				</div>

				 
	
			</div>
			<div style="text-align: center">
				<img src="/img/CineChimu.png" height="140" >
			</div>
		</div>
		
	</form>


</div>
</div>
</html>