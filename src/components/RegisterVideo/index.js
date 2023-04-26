import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://jkqecgkaxjgokqbrxyca.supabase.co";
const PROJECT_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWVjZ2theGpnb2txYnJ4eWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDAzMjQsImV4cCI6MTk5NzQxNjMyNH0.tQjw3aO93jl_-BQfCZ6DutzVMoMxsh3AWJOLj2pZB3c";
const supabase = createClient(PROJECT_URL, PROJECT_API_KEY);
// const CDNURL = "https://app.supabase.com/project/jkqecgkaxjgokqbrxyca/storage/buckets/images";

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "",
      password: "",
      email: "",
      desc: "",
      categoria: "Camisas",
      thumb: "",
    },
  });

  const [formVisivel, setFormVisivel] = useState(false);

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={async (e) => {
            supabase
              .from("itens")
              .insert({
                title: formCadastro.values.titulo,
                email: formCadastro.values.email,
                desc: formCadastro.values.desc,
                thumb: formCadastro.values.thumb,
                password: formCadastro.values.password,
                // thumb: CDNURL + "/" + images.name,
                playlist: formCadastro.values.categoria,
              })
              .then((oqueveio) => {
                oqueveio;
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
            formCadastro.clearForm();
            setFormVisivel(false);
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <label>Insita o Titulo do Item que sera cadastrado</label>
            <input
              required
              placeholder="Título do item"
              value={formCadastro.values.titulo}
              name="titulo"
              onChange={formCadastro.handleChange}
            />
            <label>
              Insira seu e-mail ou seu @ do instagram para alguem entrar em contato com você e trocar  o item por outro
            </label>
            <input
              required
              type="text"
              placeholder="Example@example.com ou @example"
              name="email"
              value={formCadastro.values.email}
              onChange={formCadastro.handleChange}
            />
            <label>Insira uma descrição do produto</label>
            <textarea
              rows="4"
              cols="50"
              value={formCadastro.values.desc}
              name="desc"
              onChange={formCadastro.handleChange}
            />
            <label>Insira a Url da imagem do produto</label>
            <input
              required
              type="text"
              name="thumb"
              onChange={formCadastro.handleChange}
            />
            { /*<label>Insira a imagem do produto</label>
            <input type="file" accept="image/*" name="thumb" onChange={(e) => uploadImage(e)} /> */}
            <label className="labell">Selecione a categoria:</label>
            <select
              required
              name="categoria"
              onChange={formCadastro.handleChange}
              value={formCadastro.values.categoria}
            >
              <option value="Camisas">Camisas</option>
              <option value="Calças">Calças</option>
              <option value="Shorts">Shorts</option>
              <option value="Meias">Meias</option>
              <option value="Blusas">Blusas</option>
              <option value="Tênis">Tênis</option>
              <option value="Boné">Tênis</option>
            </select>
            <label>Insira uma senha para deletar após a troca</label>
            <input required type="password" name="password" onChange={formCadastro.handleChange} />
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
